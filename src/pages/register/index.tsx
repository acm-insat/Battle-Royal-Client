import { Card, Button, Input, Error, Checkbox } from 'shared/ui'
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'
import React, { useState } from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { register as REGISTER } from 'shared/queries'
import { useMutation } from '@apollo/client'
import { concat } from 'lodash'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: validators.defaults, delayError: 1000 })

  const [submit, { data, loading }] = useMutation(REGISTER)

  const [nbOfMembers, setNbOfMembers] = useState(1)
  const handleMembers = value => {
    const final = nbOfMembers + value
    if (final >= 1 && final <= 3) setNbOfMembers(final)
  }

  const onSubmit = data => {
    submit({ variables: { team: data } })
  }

  return (
    <Card title="Battle Royale Team Registartion">
      {data?.register?.message && <h1>{data?.register?.message}</h1>}
      {!data?.register?.message && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            aperiam aliquid odio ad aut, dicta quod minima, labore quasi
            doloremque quibusdam? Iusto, nesciunt at. Consequuntur eos natus
            earum dicta sequi.
          </p>
          <br />

          <Input
            name="name"
            register={register}
            validate={validators.name}
            placeholder="my-team-name"
          />

          <br />

          <Checkbox name="onsite" register={register} />

          {new Array(nbOfMembers).fill(0).map((_, idx) => (
            <div className="box" key={`register-member-${idx}`}>
              <div className="box-title">
                {idx == 0 && <h4>TEAM LEADER</h4>}
                {idx > 0 && <h4>TEAM MEMBER {idx + 1}</h4>}
              </div>

              <Checkbox
                name={`members.${idx}.isMember`}
                label="ACM Member"
                register={register}
              />

              <Input
                label="fullname"
                name={`members.${idx}.fullname`}
                placeholder="his name"
                register={register}
                validate={validators.fullname(idx + 1)}
              />
              <Input
                label="email"
                name={`members.${idx}.email`}
                placeholder="his email"
                validate={validators.email(idx + 1)}
                register={register}
              />
              <Input
                label="phone"
                name={`members.${idx}.phone`}
                placeholder="his phone"
                validate={validators.phone(idx + 1)}
                register={register}
              />
              <Input
                label="university"
                name={`members.${idx}.university`}
                placeholder="MIT"
                register={register}
              />
            </div>
          ))}

          <div className="btn-box p-1">
            <button className="mr10" onClick={() => handleMembers(-1)}>
              <FontAwesomeIcon icon={faUserMinus} />
            </button>
            <button onClick={() => handleMembers(1)}>
              <FontAwesomeIcon icon={faUserPlus} />
            </button>
          </div>
          <br />

          {data?.register?.errors?.map((e, idx) => (
            <Error msg={e} key={`register-error-from-server-${idx}`} />
          ))}
          {getFormErrors(errors).map((e, idx) => (
            <Error msg={e} key={`register-error-${idx}`} />
          ))}

          <Button type="submit" contained fullWidth disabled={loading}>
            {loading ? 'Registering..' : 'Register Team'}
          </Button>
        </form>
      )}
    </Card>
  )
}

export default Register
