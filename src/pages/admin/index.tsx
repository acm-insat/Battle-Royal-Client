import { Button, FullButton, Card } from "shared/ui"
const Admin = () => {
    return (
      <Card title="Admin Panel">
        <div>
          <div className="flex gap-x-20 w-full mb-5">
            <div>
              <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6"><path d="M8.23 10.77a7.01 7.01 0 1 1 5 5L11 18H9v2H7v2.03H2V17l6.23-6.23zM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" class="fill-current text-gray-400"></path> <path d="M6.2 18.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 1 1 1.4 1.4l-4 4z" className="fill-current text-gray-600"></path></svg>
              <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider">Teams</div>
              </div>
              <div className="mt-3 mb-8 max-w-2xl text-sm text-white">
                Total: 20 / <strong>Active: 7 </strong></div>
            </div>
            <div>
              <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6"><path d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z" className="fill-current text-gray-400"></path> <polygon points="21 6 12 10 12 22 21 18" className="fill-current text-gray-600"></polygon></svg>
              <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider">Problems</div>
              </div>
              <div className="mt-3 mb-8 max-w-2xl text-sm text-white">
                Total: 100 / <strong>Underway: 88 </strong> / Over: 12</div>
            </div>
            <div>
              <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6"><path d="M12 21a2 2 0 0 1-1.41-.59l-.83-.82A2 2 0 0 0 8.34 19H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4a5 5 0 0 1 4 2v16z" className="fill-current text-gray-400"></path> <path d="M12 21V5a5 5 0 0 1 4-2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4.34a2 2 0 0 0-1.42.59l-.83.82A2 2 0 0 1 12 21z" className="fill-current text-gray-600"></path></svg>
              <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider">Submissions</div>
              </div>
              <div className="mt-3 mb-8 max-w-2xl text-sm text-white">
                Total: 100 / <strong>Accepted: 95 </strong></div>
            </div>
          </div>
          <div>
            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6"><path d="M3 6l9 4v12l-9-4V6zm14-3v2c0 1.1-2.24 2-5 2s-5-.9-5-2V3c0 1.1 2.24 2 5 2s5-.9 5-2z" className="fill-current text-gray-400"></path> <polygon points="21 6 12 10 12 22 21 18" className="fill-current text-gray-600"></polygon></svg>
              <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider"><a href="admin/problems" className="">Manage Problems</a></div>
            </div>
            <div className="mt-3 mb-8 max-w-2xl text-sm text-white">
              End a challenge or start a new one for the teams, you could give it a title, type/genre, short description, full description that supports Markdown, its level, score and delay to end!  
            </div>
          </div>
          <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
      <path className="fill-current text-gray-400"  d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
    </svg>
            <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider">
            <a href="admin/clarifications" className="">Answer Problem Clarifications</a>
            </div>
          </div>
          <div className="mt-3 max-w-2xl text-sm text-white">
            Oh, you kinda made some problem too complicated, here you can answer questions and explain more...
          </div>
        </div><br/>
        <FullButton contained>
            Fire The Event Countdown!
        </FullButton>
      </Card>
    )
  }
  
  export default Admin
  