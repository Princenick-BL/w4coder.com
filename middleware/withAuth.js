import { useRouter } from "next/router";
import Loading from "../components/WaitingPage";
import {Fragment} from 'react'
import jwtDecode from 'jwt-decode';

const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      const Router = useRouter();

      const accessToken = localStorage.getItem("access_token");
      if(accessToken){
        var decodedToken = jwtDecode(accessToken, {complete: true});
        var dateNow =  Math.floor(Date.now() / 1000)
        // If there is no access token we redirect to "/" page.
      }
      if (!accessToken || decodedToken.exp < dateNow) {
        Router.push(`/admin/auth/login?redirect=${window?.location?.href}`);
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return (
          <div>
              <WrappedComponent {...props} />
          </div>
      );
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;
