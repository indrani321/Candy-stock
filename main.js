document.addEventListener("DOMContentLoaded", () => {
  const candyInfo = document.getElementById("candy-info");
  axios.get('https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data')
    .then((response) => {
      const candies = response.data;
      candies.forEach((candy, index) => {
        const listItem = document.createElement("li");
        const text = document.createTextNode(candy.Candyname + " - " + candy.Description + " - " + candy.Price + " - " + candy.Quantity);
        listItem.appendChild(text);
        let cand = candy._id

        const buy1 = document.createElement("button");
        buy1.textContent = "BUY 1";
        buy1.setAttribute("id", "btn" + index);
        buy1.addEventListener("click", () => {
          axios.delete(`https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data/${cand}`)
            .then((response) => {
              console.log(response);
              // listItem.remove();
              location.reload();
            })
            .catch((error) => {
              console.error(error);
            });

        let obj = {
          "Candyname" : listItem.textContent.split(" - ")[0],
          "Description" : listItem.textContent.split(" - ")[1],
          "Price" : listItem.textContent.split(" - ")[2],
          "Quantity" : parseInt(listItem.textContent.split(" - ")[3])-1
        }
        axios.post("https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data", obj)
            .then((response) => {
              console.log(response);
              location.reload();
            })
            .catch((error) => {
              console.error(error);
            });
      });
            listItem.appendChild(buy1);
 
            const buy2 = document.createElement("button");
            buy2.textContent = "BUY 2";
            buy2.setAttribute("id", "btn1" + index);
            buy2.addEventListener("click", () => {
              axios.delete(`https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data/${cand}`)
                .then((response) => {
                  console.log(response);
                  location.reload();
                })
                .catch((error) => {
                  console.error(error);
                });

            let obj = {
              "Candyname" : listItem.textContent.split(" - ")[0],
              "Description" : listItem.textContent.split(" - ")[1],
              "Price" : listItem.textContent.split(" - ")[2],
              "Quantity" : parseInt(listItem.textContent.split(" - ")[3])-2
            }
            axios.post("https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data", obj)
                .then((response) => {
                  console.log(response);
                  location.reload();
                })
                .catch((error) => {
                  console.error(error);
                });
          });
                listItem.appendChild(buy2);

                const buy3 = document.createElement("button");
                buy3.textContent = "BUY 3";
                buy3.setAttribute("id", "btn2" + index);
                buy3.addEventListener("click", () => {
                  axios.delete(`https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data/${cand}`)
                    .then((response) => {
                      console.log(response);
                      location.reload();
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                
                let obj = {
                  "Candyname" : listItem.textContent.split(" - ")[0],
                  "Description" : listItem.textContent.split(" - ")[1],
                  "Price" : listItem.textContent.split(" - ")[2],
                  "Quantity" : parseInt(listItem.textContent.split(" - ")[3])-3
                }
                axios.post("https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data", obj)
                    .then((response) => {
                      console.log(response);
                      location.reload();
                    })
                    .catch((error) => {
                      console.error(error);
                    });
              });
                    listItem.appendChild(buy3);
                 candyInfo.appendChild(listItem);
      });
    })
    .catch((error) => {
      document.body.innerHTML = "<h3>Something went wrong</h3>";
      console.error(error);
    });

  });

let sub = document.getElementById("submit");
sub.addEventListener("click", () => {
  let c = document.getElementById("candyname").value;
  let d = document.getElementById("description").value;
  let e = document.getElementById("price").value;
  let f = document.getElementById("quantity").value;
    let object = {
    "Candyname" : c,
    "Description" : d,
    "Price" : e,
    "Quantity" : f
  }
  axios.post('https://crudcrud.com/api/e6b7ab9939cb4c3ea544216b8e070dfd/data', object)
       .then((response)=>{
        console.log(response);
        location.reload();

       })
       .catch((error)=>{
        console.error(error);
       })
       
});
