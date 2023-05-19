import React from 'react';
import useTitle from '../../shared/hooks/useTitle';

const Blogs = () => {
    useTitle("Blogs")

    return (
        <div className=''>
            <div className='h-[70px] bg-[#292944]'></div>
            <h3 className='text-center text-3xl font-bold my-10'>Some Questions & Answers</h3>
            <div className='mx-32 mb-20'>
                <p className='font-bold'>01. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>

                <p className='pt-2 mb-10'><span className='font-bold'>Answer:</span> Refresh tokens are a way to obtain new access tokens without requiring the user to authenticate again. They are useful for long-lived applications that need to access protected resources on behalf of the user. However, not all OAuth 2.0 clients and scopes can use refresh tokens. In this article, you will learn how to use refresh tokens with different types of OAuth 2.0 clients and scopes, and what are the benefits and risks involved.
                    An access token is a credential that is issued to a client (such as a user or an application) after successfully authenticating with an identity provider (such as an authentication server). It is a short-lived token that typically has an expiration time. The access token is used to authorize the client to access specific resources or perform certain actions on behalf of the authenticated user.
                    A refresh token, on the other hand, is a long-lived token that is also issued during the authentication process. It is used to obtain a new access token when the current access token expires. The refresh token is typically kept securely on the client-side and is sent to the authentication server to request a new access token.</p>


                <p className='font-bold'>02. Compare SQL and NoSQL databases?</p>

                <p className='pt-2 mb-10'><span className='font-bold'>Answer:</span> SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. SQL databases use the SQL language for defining and manipulating data. SQL provides a standardized way to query and manipulate relational data using declarative statements. SQL databases are suitable for applications that require structured data, complex queries involving multiple tables and relationships, and strong data consistency. They are commonly used for financial systems, e-commerce platforms, and applications with well-defined schemas.
                    <br />
                    A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. NoSQL databases may have their own query languages specific to their data models. Some NoSQL databases support SQL-like query languages, while others offer APIs for data access and manipulation.NoSQL databases excel in handling large amounts of unstructured or semi-structured data, high write loads, and scenarios that demand flexible schemas. They are often used in content management systems, real-time analytics, social networks, and applications dealing with rapidly changing data.
                </p>


                <p className='font-bold'>03. What is express js? What is Nest JS?</p>

                <p className='pt-2 mb-10'><span className='font-bold'>Answer:</span> Express is a minimalist and flexible framework that is easy to use and has a large community of developers. Express follows a traditional request-response model, where each incoming request is processed by a route handler that sends a response back to the client. The route handler can perform some actions, such as querying a database or calling an external API, before sending the response. Express does not provide any opinionated architecture and leaves the application structure up to the developer. Express.js is a minimalistic and lightweight web framework for Node.js. It provides a simple and flexible way to handle HTTP requests, manage routes, and build web applications.
                    Express.js focuses on being unopinionated and providing a thin layer of abstraction over Node.js's core HTTP functionality. It allows developers to handle request/response cycles, define routes, and implement middleware functions to process requests.
                    Express.js provides a straightforward and intuitive API, making it easy to get started and build web applications quickly. It is often used for building RESTful APIs, single-page applications (SPAs), and server-side rendered applications.
                    <br />
                    NestJS is a newer framework that provides additional features such as dependency injection, a modular architecture, and an intuitive CLI. It follows a modular architecture that is based on the Model-View-Controller (MVC) design pattern. NestJS applications are organized into modules, and each module can have controllers, services, and providers. Controllers handle incoming requests, services contain business logic, and providers manage dependencies. NestJS also provides built-in support for dependency injection, which makes it easier to manage dependencies and write modular and scalable code. Nest.js is a more opinionated and feature-rich framework built on top of Express.js. It is designed to provide a scalable and structured approach to building server-side applications with TypeScript or JavaScript.
                    Nest.js is known for its focus on developer productivity, maintainability, and testability. It follows the SOLID principles and promotes a layered architecture, making it easier to write clean and scalable code.
                </p>


                <p className='font-bold'>01. What is MongoDB aggregate and how does it work?</p>

                <p className='pt-2 mb-10'><span className='font-bold'>Answer:</span> Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.

One of the most common use cases of Aggregation is to calculate aggregate values for groups of documents. This is similar to the basic aggregation available in SQL with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB Aggregation goes further though and can also perform relational-like joins, reshape documents, create new and update existing collections, and so on. 

While there are other methods of obtaining aggregate data in MongoDB, the aggregation framework is the recommended approach for most work. Each stage in the pipeline performs a specific operation on the input data and produces transformed output. The output of one stage becomes the input for the next stage in the pipeline.
MongoDB provides a rich set of aggregation operators and expressions that can be used in different stages of the pipeline. These operators allow you to perform various computations, transformations, and data manipulations.

Common Aggregation Stages:  $sort, $group. $match, $unwind, $limit and $skip, $project</p>
            </div>
        </div>
    );
};

export default Blogs;