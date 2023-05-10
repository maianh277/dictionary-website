import React from "react";

const Grammar = () => {
    return (
        <div>
            <div className="bg-white mx-20 p-10 shadow-xl py-40 ">
                <h1 className="text-center text-[3rem] mb-2 font-bold bg-gradient-to-r from-yellow-200 to-orange-600 text-transparent bg-clip-text">
                    Search for Grammar
                </h1>
                <form className="w-3/4 m-auto">
                    <label
                        for="default-search"
                        class="text-sm font-medium text-gray-900 sr-only dark:text-black"
                    >
                        Search
                    </label>
                    <div class="relative">
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-teal-500 dark:focus:border-teal-500"
                            placeholder="Search..."
                            required
                        ></input>
                        <button
                            type="submit"
                            class="text-white absolute right-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 bg-gradient-to-r from-yellow-200 to-orange-500"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Grammar;