function solve() {

    const baseUrl=`https://judgetests.firebaseio.com/schedule/`;
    console.log(baseUrl);

    let stopId=`depot`;




    function changeButton() {
        let inputDepart=document.getElementById('depart');
        let inputArrive=document.getElementById('arrive');
        if(inputDepart.disabled){
            inputDepart.disabled=false;
            inputArrive.disabled=true;
        }else {
            inputDepart.disabled=true;
            inputArrive.disabled=false
        }

    }

    function depart() {

          const url=`${baseUrl}${stopId}.json`;

          fetch(url)
              .then(response=>response.json())
              .then(data=> console.log(data));

        let spanInfo=document.getElementsByClassName('info')[0];
        spanInfo.textContent=`Next stop`;

      changeButton()
       }

    function arrive() {
        let spanInfo=document.getElementsByClassName('info')[0];
           spanInfo.textContent='Arriving at stopName'
    changeButton()

    }

    return {
        depart,
        arrive
    };
}

let result = solve();


