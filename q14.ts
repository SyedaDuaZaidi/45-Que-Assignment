 let guests3 : string[] = ["Bisma","Kinza","Kainat"];
 guests3.map((item)=>console.log(item,"Tommorrow I plan iftar party at my home so , u join us."));    
  let notJoining1 : string = "Kainat";
  console.log(notJoining1,"not joining us for iftar party."
  );
  let newGuest3 : string = "Zehra"
  guests3[guests3.indexOf(notJoining1)]=newGuest3
  console.log(guests3
    );