

const Blog = () => {
     return (
          <div>
               <div className="my-20">
               <h2 className="text-5xl font-bold text-center my-5">Blog Page</h2>
               <h2 className="text-2xl font-semibold pb-4 ">Question: What is an access token and refresh token? How do they work and where should we store them on the client-side? </h2>
               <p className=" font-bold">Ans: <span className="border-2 border-l-info block p-10 ml-5">

               <span className=" font-bold my-4">Ques: What is an access token? <span className="border-2 border-l-info block p-10 ml-5">
               Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that the bearer of the token has been authorized to access the API and perform specific actions specified by the Scope that was granted during authorization.
               </span> 
               </span>

               <span className=" font-bold my-4">Ques: What is an refresh token? <span className="border-2 border-l-info block p-10 ml-5">
               As mentioned, for security purposes, access tokens may be valid for a short amount of time. Once they expire, client applications can use a refresh token to refresh the access token. That is, a refresh token is a credential artifact that lets a client application get new access tokens without having to ask the user to log in again.
               </span> 
               </span>
               <span className=" font-bold my-4">Ques: How do they work and where should we store them on the client-side? <span className="border-2 border-l-info block p-10 ml-5">
               Access token and refresh token shouldn be stored in the local/session storage, because they are not a place for any sensitive data. Hence I would store the access token in a httpOnly cookie (even though there is CSRF) and I need it for most of my requests to the Resource Server anyway.
               </span> 
               </span>
               
                    </span> </p>
               </div>



          <div className="my-20">
          <h2 className="text-2xl font-semibold pb-4 ">Question: differences between NoSQL and SQL </h2>
          <div>
          <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    {/* head */}
    <thead>
      <tr>
        <th>SQL</th>
        <th>NoSQL</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        
        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
        <td>Non-relational or distributed database system.</td>
        
      </tr>
      <tr>
        
        <td>These databases have fixed or static or predefined schema</td>
        <td>They have a dynamic schema</td>
        
      </tr>
      <tr>
        
        <td>These databases are not suited for hierarchical data storage.</td>
        <td>These databases are best suited for hierarchical data storage.</td>
        
      </tr>
      <tr>
        
        <td>These databases are best suited for complex queries</td>
        <td>These databases are not so good for complex queries</td>
        
      </tr>
      <tr>
        
        <td>Vertically Scalable</td>
        <td>Horizontally scalable</td>
        
      </tr>
      <tr>
        
        <td>Follows ACID property</td>
        <td>Follows CAP(consistency, availability, partition tolerance)</td>
        
      </tr>
      <tr>
        
        <td>Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server, etc</td>
        <td>Examples: MongoDB, GraphQL, HBase, Neo4j, Cassandra, etc</td>
        
      </tr>


    </tbody>
  </table>
</div>
          </div>
          </div>




          </div>
     );
};

export default Blog;