import React, { useCallback } from 'react'
import { Formik } from 'formik'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Loader } from '../../components/Loader'
import { useMutation, useQueryClient } from 'react-query'
import styles from './Form.module.scss'
import { createBeer } from '../../utils/helper'
import history from '../../history'

const initialValues = { name: '', ibu: '' } // we define this here for avoiding re-creating the object on each render, no need to use useMemo since it's a simple object, there is no heavy computation here

const BeerForm = () => {
    const queryClient = useQueryClient() // to access the queryClient instance
    const { mutate, isLoading } = useMutation(createBeer, {
        onSuccess: (data) => {
            alert(`${data.name} has been created successfully`)
        },
        onError: () => {
            alert('Something went wrong')
        },
        onSettled: () => {
            queryClient.invalidateQueries('beers') // invalidate the beers query to refetch the data
        },
    })

    const validator = useCallback((values) => {
        let errors = {}
        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.ibu) {
            errors.ibu = 'Required'
        } else if (isNaN(parseInt(values.ibu, 10))) {
            errors.ibu = 'IBU should be a number'
        }
        return errors
    }, []) // We use useCallback to avoid re-creating the function on each render

    const handleSubmit = useCallback(
        (values, { setSubmitting }) => {
            setSubmitting(true)
            mutate(values)
            history.push('/')
        },
        [mutate]
    ) // same here, we use useCallback to avoid re-creating the function on each render

    if (isLoading) return <Loader /> // display a loader while the beer is being created for better UX

    return (
        <div className={styles.form}>
            <h2>Add a beer</h2>
            <Formik
                initialValues={initialValues}
                validate={validator}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="name"
                            placeholder="Beer name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            valid={!errors.name}
                        />
                        <span className={styles.errorMessage}>
                            {errors.name && touched.name && errors.name}
                        </span>
                        <Input
                            type="ibu"
                            name="ibu"
                            placeholder="IBU"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.ibu}
                            valid={!errors.ibu}
                        />
                        <span className={styles.errorMessage}>
                            {errors.ibu && touched.ibu && errors.ibu}
                        </span>
                        <div className={styles.submitButton}>
                            <Button
                                type="submit"
                                disabled={
                                    errors.name || errors.ibu || isSubmitting
                                }
                                text="Create"
                            />
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default BeerForm
