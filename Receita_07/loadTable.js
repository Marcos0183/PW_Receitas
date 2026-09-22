export const loadTable = cs => {

   const idColumn = document.getElementById("loadColumn")
   const idBody =  document.getElementById("loadBody")

   const arrayColumn = Object.keys(cs[1])

   const columns = arrayColumn.map(item => `<td>${item}</td>`).join("\n")
   const bodys = cs.map(item => `<tr>${arrayColumn.map(atr =>`<td>${item[atr]}</td>`).join("")}</tr>`).join("")

   idColumn.innerHTML = columns
   idBody.innerHTML = bodys

}

