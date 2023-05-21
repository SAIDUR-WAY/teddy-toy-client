

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

          <div className = "my-20">
          <h2 className="text-2xl font-semibold pb-4 ">Question:What is express js? What is Nest JS (google it)? </h2>
               <p>ques: What is express js? </p>
               <p className="border-2 border-l-info block p-10 ml-5"> ans:
               Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.

Building a backend from-scratch for an application in Node.js can be tedious and time consuming. From setting up ports to route handlers, writing all of the boilerplate code takes away from what really matters, which is writing the business logic for an application. By using web frameworks like Express.js, developers can save time and focus on other important tasks. To learn more about Express and what it can do, visit the
               </p>

               <p className="py-5">ques: What is Nest JS? </p>
               <p className="border-2 border-l-info block p-10 ml-5">Ans: Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    <br />
                    With over 46.6k stars and 5.4k forks on GitHub, and a weekly download count of up to 700,000, the framework is a popular go-to for crafting out your backend project with Node.js.

Nest.js is a perfect solution for your next project if you need to build a scalable, maintainable, enterprise-level application.

In the next section, we’ll explore what it is used for and different companies using the framework in production.
               </p>
          </div>

          <div className="my-20">
               <p className="py-5">Ques: What Is Aggregation?</p>
               <p className="border-2 border-l-info block p-10 ml-5"> Ans:
               At the start of this introduction, we mentioned MongoDB provides two methods to perform aggregation. The simplest is single-purpose aggregation.

Single-purpose aggregation operations are a collection of helper methods applied to a collection to calculate a result. These helper methods enable simple access to common aggregation processes.


Two of such methods provided are:

Distinct()
countDocuments()
               </p>

               <p className="py-5">Ques: How Does Aggregation Work in MongoDB?</p>
               <p className="border-2 border-l-info block p-10 ml-5">Ans: When you need to do more complex aggregation, you can use the MongoDB aggregation pipeline (here’s a more detailed tutorial). Aggregation pipelines are collections of stages that, combined with the MongoDB query syntax, will allow you to obtain an aggregated result.

Before we dive into the code, let understand what the aggregation pipeline itself does and how it works. In the aggregation pipeline, you list out a series of instructions in a stage For each stage that defined, MongoDB executes them one after another in order to give a finalized output youre able to use. Let look at an example usage of the aggregate command:

               </p>
          </div>




          <div className="divider"></div> 
          </div>
     );
};

export default Blog;