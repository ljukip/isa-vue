<template>
    <div id="working-hours-pharmacist">
         <hr style="background: #0bb1bd; height: 1px" />
         <h2>Working hours pharmacist</h2>
        <div  id="Div-panel" style="display: inline">
            <div>
                <table id="myTable">
                    <thead>
                        <tr class="header">
                           <th>             </th>
                           <th>Monday</th>
                           <th>Tuesday</th>
                           <th>Wednesday</th>
                           <th>Thursday</th>
                           <th>Friday</th>
                           <th>Saturday</th>
                           <th>Sunday</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Start time:</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <td>End time:</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                            <td>{{}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>



<style scoped>
#myTable {
  border-collapse: collapse;
  width: 100%;
  font-size: 16px;
  border: solid transparent 1px;
  border-radius: 6px;
  background-color: #d9f2f3d5;
}

th {
  text-align: left;
  padding: 12px;
  background-color: #e2c5fe70;
}

tr {
  border-bottom: 1px solid rgba(54, 4, 42, 0.801);
}

td {
  text-align: left;
  padding: 12px;
}
</style>