import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/slices/userSlice";
import axios from 'axios';

const useAuth = () => {
    const [auth, setAuth] = useState(false);
    const [statusCode, setStatusCode] = useState(0);

    const user = useSelector(selectUser);

    useEffect(() => {
        const validateToken = async () => {
            if (user) {
                try {
                    await axios.post('http://localhost:5001/api/token', {
                        token: user.accessToken
                    }, {
                        validateStatus: (status) => setStatusCode(status)
                    });
                } catch (error) {
                    console.log(error)
                }
                console.log(statusCode)
                if(statusCode === 200) setAuth(true);
            }
        }
        validateToken();
    }, [statusCode, user]);
    
    return { auth };
}

export default useAuth;

export const useAuth2 = () => {
    const [auth, setAuth] = useState(false);
    const [statusCode, setStatusCode] = useState(0);

    const user = useSelector(selectUser);
    useEffect(() => {
      const validateToken = async () => {
          if (user) {
              try {
                  await axios.post('http://localhost:5001/api/token', {
                      token: user.accessToken
                  }, {
                      validateStatus: (status) => setStatusCode(status)
                  });
              } catch (error) {
                  console.log(error)
              }
              console.log(statusCode);
          }
      }
      validateToken();
    }, []);
}