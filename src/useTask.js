import service from "./appwrite/config";

function useTask() {
  const totalTask = [];

  service
    .getPost("")
    .then((data) => {
      return data.documents;
    })
    .then((data) => {
      console.log("Data ", data);
      data.forEach((e) => {
        console.log(e.todoTask);
        totalTask.push(e.todoTask);
      });
    });
  return totalTask;
}
export default useTask;
