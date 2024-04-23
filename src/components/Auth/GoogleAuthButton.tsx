import React from 'react'
import Button from '@mui/material/Button'

const GoogleAuthButton: React.FC = () => {
  return (
    <a href={`/login`}>
      <Button
        variant="outlined"
        fullWidth
        startIcon={
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_5237_988)">
              <path
                d="M24.266 12.2765C24.266 11.4608 24.1999 10.6406 24.0588 9.83813H12.74V14.4591H19.2217C18.9528 15.9495 18.0885 17.2679 16.823 18.1056V21.104H20.69C22.9608 19.014 24.266 15.9274 24.266 12.2765Z"
                fill="#4285F4"
              />
              <path
                d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z"
                fill="#34A853"
              />
              <path
                d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z"
                fill="#FBBC04"
              />
              <path
                d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z"
                fill="#EA4335"
              />
            </g>
            <defs>
              <clipPath id="clip0_5237_988">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        }
        sx={{
          backgroundColor: 'white',
          color: '#344054',
          padding: '8px',
          borderColor: '#F0F1F5',
          fontWeight: 400,
          marginBottom: '16px',
          '& .MuiButton-startIcon': {
            marginLeft: 0,
            marginRight: 0,
          },
        }}
      />
    </a>
  )
}
export default GoogleAuthButton
