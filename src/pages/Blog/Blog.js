import React from 'react';

const Blog = () => {
    return (
        <div className='bg-gray-100 flex justify-center items-center'>
            <div className='w-2/4'>

                <div className='py-12'>
                    <h1 className='mb-3 text-xl text-red-500'>14.1 How will you improve the performance of a React Application?</h1>
                    <div className='text-green-700 text-sm'>
                        <p className='text-xl'>React pre-optimization techniques:</p>
                        <br />
                        <p>1. Keeping component state local where necessary</p>
                        <p>2. Memoizing React components to prevent unnecessary re-renders</p>
                        <p>3. Code-splitting in React using dynamic import()</p>
                        <p>4. Windowing or list virtualization in React</p>
                        <p>5. Lazy loading images in React</p>
                    </div>
                </div>

                <div className=''>
                    <h1 className='mb-3 text-xl text-red-500'>14.2 What are the different ways to manage a state in a React application?</h1>
                    <div className='text-green-700 text-sm'>
                        <p className='mb-2'>The Four Kinds of React State to Manage:</p>
                        <ul className=''>
                            <li>1. Local (UI) state – Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook.</li>

                            <li className='my-2'>2. Global (UI) state – Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>

                            <li>3. Server state – Data that comes from an external server that must be integrated with our UI state. erver state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</li>

                            <li className='mt-2'>4. URL state – Data that exists on our URLs, including the pathname and query parameters.</li>
                        </ul>
                    </div>
                </div>

                <div className='py-16'>
                    <h1 className='mb-3 text-red-500 text-xl'>14.4 Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <div className='mt-2 text-green-700 text-sm'>
                        <p>One should never update the state directly because of the following reasons:</p>
                        <ul className='mt-2'>
                            <li>1. If you update it directly, calling the setState() afterward may just replace the update you made.</li>
                            <li className='my-2'>2. When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.</li>
                            <li>3. You will lose control of the state across all components.</li>
                        </ul>
                    </div>
                </div>

                <div className=''>
                    <h1 className='mb-3 text-red-500 text-xl'>14.5 You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <div className='text-green-700 text-sm'>
                        <p>Sort my product list. Exma:</p>
                        <ul className='my-2 list-disc ml-5'>
                            <li>product title</li>
                            <li>date created</li>
                            <li>date updated</li>
                            <li>inventory</li>
                            <li>product type</li>
                        </ul>
                        <p className='mb-2'>Filtering my product list can help you find the specific products that you need to edit, review, or update. The following filter options are available:</p>

                        <ul className='list-disc ml-5'>
                            <li>Product vendor - Shows the products that are from the selected product vendor.</li>
                            <li className='my-2'>Availability - Shows the products that are available to a sales channel.</li>
                            <li>Status - Shows the products with an archived, active or draft status.</li>
                        </ul>
                    </div>
                </div>

                <div className='py-12'>
                    <h1 className='mb-3 text-red-500 text-xl'>14.6 What is a unit test? Why should write unit tests?</h1>
                    <div className='text-sm text-green-700'>
                        <p> UNIT TESTING is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. Unit Testing is important because software developers sometimes try saving time doing minimal unit testing and this is myth because inappropriate unit testing leads to high cost Defect fixing during System Testing, Integration Testing and even Beta Testing after application is built. If proper unit testing is done in early development, then it saves time and money in the end.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;