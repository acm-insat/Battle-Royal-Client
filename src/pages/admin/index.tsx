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
            <div className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6">
            <path d="m82 290v131.54c0 6.63 5.19 12.46 11.82 12.46h47.64c6.63 0 11.54-5.83 11.54-12.46v-131.54z" fill="#908c85"/><path d="m112 421.54v-131.54h-30v131.54c0 6.63 5.19 12.46 11.82 12.46h30c-6.63 0-11.82-5.83-11.82-12.46z" fill="#75726e"/><path d="m160 175.4v117.01l182 74.81v-266.64z" fill="#72bcef"/><path d="m58.53 197.47v72.87h-9.78a32 32 0 0 1 -32-32v-8.87a32 32 0 0 1 32-32z" fill="#4a5160"/><path d="m76.53 175c-11.04 0-19.53 9.36-19.53 20.4v77.01a19.264 19.264 0 0 0 19.53 19.59h83.47v-117z" fill="#7d8595"/><path d="m127.23 316a12.187 12.187 0 0 0 -12.23 11.99v60.36c0 6.62 5.6 11.65 12.23 11.65h25.77v-84z" fill="#605d58"/><path d="m386.34 194.57a39.335 39.335 0 0 1 0 78.67h-6.85v-78.67z" fill="#4a5160"/><path d="m361.5 78.46a19.414 19.414 0 0 0 -13.843 5.78 19.624 19.624 0 0 0 -5.657 13.97v271.39a19.743 19.743 0 0 0 19.745 19.75 19.133 19.133 0 0 0 13.722-5.78 19.5 19.5 0 0 0 5.533-13.97v-271.39a19.539 19.539 0 0 0 -19.5-19.75z" fill="#7d8595"/><path d="m87 272.41v-77.01c0-11.04 8.49-20.4 19.53-20.4h-30c-11.04 0-19.53 9.36-19.53 20.4v77.01a19.264 19.264 0 0 0 19.53 19.59h30a19.264 19.264 0 0 1 -19.53-19.59z" fill="#626872"/><g fill="#6addc7"><path d="m461.4 341.54a5.99 5.99 0 0 1 -4.806-2.4l-26.072-34.8a6 6 0 1 1 9.6-7.195l26.072 34.8a6 6 0 0 1 -4.8 9.6z"/><path d="m435.32 170.341a6 6 0 0 1 -4.8-9.6l26.072-34.8a6 6 0 1 1 9.6 7.2l-26.072 34.8a5.99 5.99 0 0 1 -4.8 2.4z"/><path d="m495 239h-43a6 6 0 0 1 0-12h43a6 6 0 0 1 0 12z"/></g><g id="_Path_3" data-name=" Path 3"><path d="m295.165 154.687a6 6 0 0 1 -2.327-11.533l4.4-1.851a6 6 0 1 1 4.649 11.062l-4.4 1.851a5.965 5.965 0 0 1 -2.322.471z" fill="#f4f8fc"/></g><g id="_Path_3-2" data-name=" Path 3"><path d="m203.9 193.047a6 6 0 0 1 -2.327-11.532l71.148-29.9a6 6 0 1 1 4.65 11.062l-71.148 29.905a5.99 5.99 0 0 1 -2.323.465z" fill="#f4f8fc"/></g></svg>
             <div className="ml-3 font-semibold text-sm text-white uppercase tracking-wider"><a href="admin/announce" className="">Announce Something</a></div>
            </div>
            <div className="mt-3 mb-8 max-w-2xl text-sm text-white">
              You can announce something that shows in the homepage you can add a flair like NEW INFO IMPORTANT WARNING, or whatever you like...
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
  