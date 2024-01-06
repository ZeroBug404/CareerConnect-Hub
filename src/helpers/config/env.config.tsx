export const getBaseUrl = ():string => {
    
    return (
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://career-connect-hub-api.vercel.app/api/v1"
    );
}