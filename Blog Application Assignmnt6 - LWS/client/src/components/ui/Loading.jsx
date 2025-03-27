import GridLoader from "react-spinners/GridLoader";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-210px)]">
        <GridLoader />
    </div>
  )
}

export default Loading