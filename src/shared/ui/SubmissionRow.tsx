import NewWindow from 'react-new-window'
import React, { useState } from 'react'
import Prism from "prismjs";
import Highlight, { defaultProps } from "prism-react-renderer";
import styled from "styled-components";

const Pre = styled.pre`
  text-align: left;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

const SubmissionRow = (props: Props) => {
    const { time, problem, lang, code, status } = props

    const statusColourMap : any= {
        "accepted": " bg-green-100 text-green-800 ",
        "pending": " bg-yellow-100 text-black ",
        "rejected": " bg-primary-2 text-white ",
        "retry": " bg-primary-4 text-white ",
    }

    const langtab:any = {
        "cpp": "C++",
        "c": "C",
        "java": "Java",
        "python": "Python",
    }

    const [showCode, setShowCode] = useState(null)

    return (
        <>
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
                <div className="text-sm leading-5 text-white">{time}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
                <div className="text-sm leading-5 text-white">{problem}</div>
            </td>

            <td className="px-6 py-4 whitespace-no-wrap border-b border-dark-2">
               {langtab[lang]}
            </td>

            <td
                className="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-dark-2">
                    <button className="" onClick={()=>setShowCode(code)}>View</button>
            </td>
            <td
                className="px-6 py-4 text-sm leading-5 text-white whitespace-no-wrap border-b border-dark-2">
                <span
                    className={"inline-flex px-2 text-xs font-semibold leading-5 "+statusColourMap[status]+" rounded-full capitalize"}>{status}</span>

            </td>
        </tr>
        {showCode ? <Window relatedShowCode={setShowCode} relatedCode={showCode} relatedLang={lang} /> : null }
        </>
    )
  }
  
const Window = ({ relatedShowCode, relatedCode, relatedLang }) => {
    React.useEffect(() => {
        Prism.highlightAll();
      }, []);
    return (
        <NewWindow onUnload={()=>relatedShowCode(null)}>
            <div className="bg-dark-2 w-full min-h-full">
            
   <Highlight {...defaultProps} code={relatedCode} language={relatedLang}>
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <Pre className={className} style={style}>
        {tokens.map((line, i) => (
          <Line key={i} {...getLineProps({ line, key: i })}>
            <LineNo>{i + 1}</LineNo>
            <LineContent>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </LineContent>
          </Line>
        ))}
      </Pre>
    )}
  </Highlight>

            </div>
        </NewWindow>
    )
}

  export default SubmissionRow
  