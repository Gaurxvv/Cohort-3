export const Input = ({ disabled,
    type,
    placeholder,
    onClick
}) => {
    return <span onClick={onClick} className={` mt-6 px-10 py-2 w-md  text-black  text-center rounded-lg`}>
        <input
            type={type}
            className="bg-gray-50 border border-gray-300 w-md  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-6 py-3 mt-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
        />
    </span>
}