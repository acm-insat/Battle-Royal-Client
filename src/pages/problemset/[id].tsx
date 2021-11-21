import ReactMarkdown from 'react-markdown'
import { useState, useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import Prism, { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-c'
import 'prismjs/components/prism-cpp'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-python'
import 'prismjs/themes/prism-dark.css'
import NewWindow from 'react-new-window'
import { Card, Button, Input, Question, Select } from 'shared/ui'
import { Redirect } from 'react-router'
import CreateClarifcation from './CreateClarification'
import { useProblem } from './hooks'

import { submitSolution } from 'shared/queries'
import { useMutation } from '@apollo/client'
import toast, { Toaster } from 'react-hot-toast'

const Problem = props => {
  const { loading, error, data } = useProblem()
  const [showCodeArea, setShowCodeArea] = useState(false)

  if (loading) return <>Loading</>
  if (error) return <Redirect to="/404" />

  return (
    <div>
      <Card title={data?.problem.title}>
        <div className="flex w-full mb-2 gap-x-4">
          <span className={'text-primary-3 text-sm capitalize'}>
            {data?.problem.type === 0 && 'Unrated'}
            {data?.problem.type === 1 && 'Easy'}
            {data?.problem.type === 2 && 'Medium'}
          </span>
          <span className={'ml-auto mr-0 text-primary-4 text-sm'}>
            {data?.problem.score} XP
          </span>
        </div>
        <div className="mb-20 markdown text-sm">
          <ReactMarkdown>{data?.problem.content}</ReactMarkdown>
          {!data?.problem.ended && props.user && !props.user.unqualified && (
            <Button
              onClick={() => setShowCodeArea(true)}
              className="block float-right mt-10"
              contained
            >
              Submit Your Solution
            </Button>
          )}
        </div>
      </Card>
      <Card title="">
        <h1 className="text-xl">Clarifications</h1>
        <br />
        <CreateClarifcation problem={data.problem.id} />
        {data.problem.clarifications.map(({ content, response }) => (
          <Question
            key={`${content}-${response}`}
            question={content}
            answer={response}
          />
        ))}
      </Card>

      {showCodeArea ? (
        <Window
          problem={data?.problem.id}
          relatedtoshowcodearea={setShowCodeArea}
        />
      ) : null}
    </div>
  )
}

const Window = ({ relatedtoshowcodearea, problem }) => {
  const [code, setCode] = useState('')

  const [lang, setLang] = useState(54)

  const [wait, setWait] = useState(false)

  const [fontSize, setFontSize] = useState(12)

  const [submit] = useMutation(submitSolution)

  const getLanguageById = id => {
    return {
      54: 'cpp',
      62: 'java',
      50: 'c',
      71: 'python',
    }[id]
  }

  const handleSubmit = async () => {
    if (wait) return
    setWait(true)
    if (code !== '') {
      submit({
        variables: {
          submission: {
            language_id: lang,
            source_code: code,
            problem,
          },
        },
      })
        .then(response => {
          if (response.data.submitSolution === 'done') {
            toast.success('Code Submitted Successfully')
          } else toast.error('Submission was unsuccessful')

          setCode('')
          setWait(false)
        })
        .catch(() => {
          toast.error('Submission was unsuccessful')
          setWait(false)
        })
    }
  }

  return (
    <NewWindow onUnload={() => relatedtoshowcodearea(false)}>
      <Toaster />
      <div className="bg-dark-2 text-white top-0 fixed h-14 w-full">
        <div className="w-4/5 flex float-left text-white -mt-1">
          <select
            name="code-language"
            onChange={e => setLang(Number(e.target.value))}
            className="w-20 appearance-none p-3 rounded-2xl mr-1 ml-1 mt-2 bg-dark-3 mb-5 focus:outline-none cursor-pointer"
            style={{ fontFamily: 'Font Awesome 5 Brands' }}
          >
            <option value="54">C++</option>
            <option value="50">C</option>
            <option value="62">Java</option>
            <option value="71">Python</option>
          </select>
          <Button
            onClick={() => setFontSize(fontSize + 1 < 28 ? fontSize + 1 : 28)}
            contained
            className="mt-3 mr-1"
          >
            <i className="fas fa-search-plus"></i>
          </Button>
          <Button
            onClick={() => setFontSize(fontSize - 1 > 8 ? fontSize - 1 : 8)}
            contained
            className="mt-3"
          >
            <i className="fas fa-search-minus"></i>
          </Button>
        </div>
        <div className="w-1/5 flex float-right">
          <Button
            className="block float-right mt-2 mr-2 ml-auto"
            type="submit"
            contained
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <Editor
        className="mt-14 min-h-full	 text-white bg-dark-3"
        value={code}
        onValueChange={code => setCode(code)}
        highlight={code =>
          highlight(
            code,
            languages[getLanguageById(lang)],
            getLanguageById(lang)
          )
        }
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: fontSize,
        }}
      />
    </NewWindow>
  )
}

export default Problem
