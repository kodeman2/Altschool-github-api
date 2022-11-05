import {ErrorBoundary} from 'react-error-boundary'
import React from 'react';

// This is our ErrorFallback component
function ErrorFallback({error, resetErrorBoundary}) {
  // We can render any custom fallback UI
 return (
   <div className='fallback' role="alert">
     <p>Something went wrong:</p>
     <pre style={{color: 'red'}}>{error.message}</pre>
     <button onClick={resetErrorBoundary}>Try again</button>
   </div>
 )
}

// This is our ErrorTest component
function Bomb({username}) {
if (username === 'bomb') {
 throw new Error('💥 CABOOM 💥')
}
// if there's no error, render this
return `Hi ${username}`
}


export default function ErrorTest() {
  
const [username, setUsername] = React.useState('')
const usernameRef = React.useRef(null)


return (
 <div className='errorinput'>
   <label>
     {`Username (don't type "bomb"):  `}
     <input
       placeholder={`type "bomb"`}
       value={username}
       onChange={e => setUsername(e.target.value)}
       ref={usernameRef}
     />
   </label>
   <div>
    {/* error boundaries declaration */}
     <ErrorBoundary
       FallbackComponent={ErrorFallback}
       onReset={() => {
         setUsername('')
         usernameRef.current.focus()
       }}
       resetKeys={[username]}
     >
       <Bomb username={username} />
     </ErrorBoundary>

  
   </div>
 </div>
)
}