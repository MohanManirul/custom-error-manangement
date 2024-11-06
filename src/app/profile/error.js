"use client";

export default function Error({ error }) {
 // error object props hisebe pick kora hoyeche
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {/* message property access kora hoyeche */}
      <p>{error.message}</p> 
     
    </div> 
  );
}


 README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MohanManirul/custom-error-manangement.git
git push -u origin main