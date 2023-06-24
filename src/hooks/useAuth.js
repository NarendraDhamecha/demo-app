const useAuth = () => {
   
    const sendHttpReq = async (requestConfi, actionOnSuccess = () => {}) => {
        try{
          const response = await fetch(requestConfi.url, {
            method: "POST",
            body: JSON.stringify(requestConfi.body)
          })

          const data = await response.json();

          if(!response.ok){
            throw new Error(data.error.message);
          }

          actionOnSuccess(data);
        }
        catch(e){
            alert(e);
        }
    }
    return sendHttpReq;
}

export default useAuth;