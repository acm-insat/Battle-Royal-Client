import { Button, FullButton, Card, Input, Select } from "shared/ui"
import React, {useState} from "react"
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'

const Announce = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    console.log({
        errors: getFormErrors(errors),
    })

    const onSubmit = data => {
        console.log({
            data,
        })
    }

    return (
        <Card title="Admin Panel / Announce Something">
        <form onSubmit={handleSubmit(onSubmit)}>
                  <Input 
                      name="announcement-flair-label"
                      register={register}
                      placeholder="announcement-flair-like-new-info-warning-..."
                  />
                  <Input 
                      name="announcement-flair-color"
                      register={register}
                      placeholder="announcement-flair-color-red-orange-green-white-blue-..."
                  />
                  <Input 
                      name="announcement-text"
                      register={register}
                      placeholder="announcement-text"
                  />
                  <FullButton type="submit" contained>
                      Add Announcment
                  </FullButton>
              </form>
    </Card>
    )
  }
  
  export default Announce
  