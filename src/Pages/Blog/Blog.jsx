import React from 'react';
import ReactToPrint from 'react-to-print';
import { useRef } from 'react';
const Blog = () => {
    const ref = useRef()
    return (
        <div>
            <div className='flex justify-center my-8'>
                <div className='inline-block text-right' >
                    <ReactToPrint trigger={() => <button className='flex gap-2 items-center text-xl font-semibold text-justify mb-2 cursor-pointer bg-slate-600 text-white p-3 rounded-xl hover:bg-slate-800'>Download PDF</button>} content={() => ref.current}></ReactToPrint>
                </div>
            </div>
            <div className='p-10' ref={ref}>

                <div className='my-10'>

                    <h2 className="font-bold text-xl md:text-2xl">1 . Tell us the differences between uncontrolled and controlled components.</h2>
                    <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                    <p className="mt-3 px-7 text-justify font-bold">Controlled Component :</p>

                    <p className="mt-3 px-7 text-justify
                    ">A component in react is referred to as controlled when we let react control the component for us. It means that the component controls the input form, and all of its changes are completely driven by event handlers . For example, a controlled component would be an input field that uses the value attribute to set the value, and also uses an onChange event handler to update the state of the component with the new value.</p>

                    <p className="mt-3 px-7 text-justify font-bold">Uncontrolled Component : </p>

                    <p className="mt-3 px-7 text-justify">Uncontrolled components are components where the form data is handled by the DOM itself instead of the component. This means that the component doesn't have control over the input value once it has been rendered. Instead, it relies on the DOM to manage the state of the input value.For example, an uncontrolled component would be an input field that doesn't use the value attribute to set the value. Instead, the value is set directly on the DOM element, and the component retrieves the value using a ref or other DOM manipulation methods.</p>

                </div>

                <hr />

                <div className='my-10'>

                    <h2 className="font-bold text-xl md:text-2xl">2 . How to validate React props using PropTypes?</h2>
                    <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                    <p className="mt-3 px-7 text-justify
                    ">React provides a utility library called PropTypes that allows to validate the props passed to a component. PropTypes helps to ensure that components receive the correct data types and values and can provide helpful error messages during development if there is an issue with the data being passed.</p>

                    <p className="mt-3 px-7 text-justify font-bold">Here are some other PropTypes validators : </p>

                    <p className="mt-3 px-7 text-justify">
                        (i)  PropTypes.string <br />
                        (ii)  PropTypes.number <br />
                        (iii)  PropTypes.bool <br />
                        (iv)  PropTypes.object <br />
                        (v) PropTypes.array <br />
                        (vi)  PropTypes.func etc.

                    </p>

                </div>
                <hr />

                <div className='my-10'>

                    <h2 className="font-bold text-xl md:text-2xl">3 . Tell us the difference between nodejs and express js.</h2>

                    <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                    <p className="mt-3 px-7 text-justify font-bold">Node JS : </p>

                    <p className="mt-3 px-7 text-justify
                    ">Node.js is an open-source JavaScript runtime environment that allows developers to run JavaScript code on the server-side. It provides an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js is commonly used for building server-side applications, command-line tools, and APIs.</p>

                    <p className="mt-3 px-7 text-justify font-bold">Express JS : </p>

                    <p className="mt-3 px-7 text-justify">Express.js is a web application framework for Node.js. It provides a set of tools and features for building web applications such as routing, middleware, templating engines, and more. Express.js simplifies the process of building web applications by providing a structure and common set of features that can be used to handle HTTP requests and responses.</p>

                </div>
                <hr />

                <div className='my-10'>

                    <h2 className="font-bold text-xl md:text-2xl">4 . What is a custom hook, and why will you create a custom hook?.</h2>

                    <p className="mt-3 px-5 text-justify"><span className="font-semibold text-xl mx-2">Answer :</span></p>

                    <p className="mt-3 px-7 text-justify
                    ">The main reason to write a custom hook is for code reusability. For example, instead of writing the same code across multiple components that use the same common stateful logic ,  anyone can put that code inside a custom hook and reuse it.</p>

                    <p className="mt-3 px-7 text-justify">Custom hooks follow a specific naming convention, where the name starts with "use" followed by a descriptive term such as "useFetch", "useForm", or "useLocalStorage"  to indicate that it is a hook and to provide a hint about its functionality. Custom hooks are simply regular JavaScript functions but they can use built-in React hooks, such as useState, useEffect, and useContext to leverage Reacts features and capabilities.</p>

                </div>

            </div>
        </div >
    );
};

export default Blog;