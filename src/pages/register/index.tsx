import { Card, FullButton, Input, Error } from 'shared/ui'
import { useForm } from 'react-hook-form'
import * as validators from './validate'
import { getFormErrors } from 'shared/helpers'
import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faUserMinus } from '@fortawesome/free-solid-svg-icons'

const Register = () => {
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
  const [teamName, setTeamName] = React.useState('')
  const [inputList, setInputList] = React.useState([
    { fullname: '', emailaddress: '', phonenumber: '', acmmember: false },
  ])

  const handleTeamNameChange = e => {
    const value = e.target
    setTeamName(value)
  }

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setInputList(list)
  }

  const handleCBChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = e.target.checked
    setInputList(list)
  }

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList]
    list.splice(index, 1)
    setInputList(list)
  }

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([
      ...inputList,
      { fullname: '', emailaddress: '', phonenumber: '', acmmember: false },
    ])
  }

  return (
    <Card title="Battle Royale Team Registartion">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="teamname"
          register={register}
          validate={validators.teamname}
          placeholder="my-team-name"
          onChange={e => handleTeamNameChange(e)}
        />
        <br />
        {inputList.map((x, i) => {
          return (
            <div className="box">
              <div className="box-title">
                {i == 0 && <h4>TEAM LEADER</h4>}
                {i > 0 && <h4>TEAM MEMBER {i + 1}</h4>}
                <div className="box-subtitle">
                  <input
                    id={'acmmember' + (i + 1)}
                    type="checkbox"
                    name="acmmember"
                    onChange={e => handleCBChange(e, i)}
                    value={x.acmmember}
                  />
                  <label for={'acmmember' + (i + 1)}> ACM Member</label>
                </div>
              </div>
              <div className="p-1">
                <label className="font-medium uppercase" htmlFor="fullname">
                  fullname
                </label>
                <input
                  className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow"
                  name="fullname"
                  placeholder="member-full-name"
                  value={x.fullname}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
              <div className="p-1">
                <label className="font-medium uppercase" htmlFor="emailaddress">
                  emailaddress
                </label>
                <input
                  className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow"
                  type="email"
                  name="emailaddress"
                  placeholder="member-email-address"
                  value={x.emailaddress}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>

              <div className="p-1">
                <label className="font-medium uppercase" htmlFor="phonenumber">
                  phonenumber
                </label>
                <input
                  className="w-full p-3 mt-1 mb-5 bg-dark-3 rounded-2xl focus:outline-none focus:shadow"
                  type="phone"
                  name="phonenumber"
                  placeholder="member-phone-number"
                  value={x.phonenumber}
                  onChange={e => handleInputChange(e, i)}
                />
              </div>
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    <FontAwesomeIcon icon={faUserMinus} />
                  </button>
                )}
                {inputList.length - 1 === i && inputList.length < 3 && (
                  <button onClick={handleAddClick}>
                    <FontAwesomeIcon icon={faUserPlus} />
                  </button>
                )}
              </div>
              <br />
            </div>
          )
        })}
        <div id="errs">
          {inputList.length < 2 && (
            <Error msg="Your Team must have at least a leader and a member." />
          )}
          {inputList.length > 3 && (
            <Error msg="Your Team must have at most a leader and two members." />
          )}
          {teamName === '' && <Error msg="Team name is a required field." />}
        </div>
        <br />
        <FullButton
          type="submit"
          contained
          disabled={
            inputList.length < 2 || inputList.length > 3 || teamName === ''
          }
        >
          Register Team
        </FullButton>
      </form>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </Card>
  )
}

export default Register
