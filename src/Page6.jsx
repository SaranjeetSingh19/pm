import React from "react";
import { useNavigate } from "react-router-dom";

const Page6 = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-yellow-100 p-6 flex items-center justify-center text-center">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h1 className="text-2xl md:text-4xl font-bold text-purple-600 mb-4">
          Mere Pyaare Polu ❤️
        </h1>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg">
          Bhaijaan ju are aaj ki date mai apun ki one of the sbse anmol insaan h. 
          Apun dono jo mrzi kre, lade ek dusre k junde faade ya anything, but apun ka ek chiz pkka h ki juu k bina nothing h mera aage ab.
        </p>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg mt-4">
          Yessssss shi sunaa apne chote chote kaano se, juu ne bhut thode se time mai bhut tagda attach ho chuka h apun tere sath ki apun k dimag mai sirf yhi chlta rehta h ki kab hum dono sath mai dinner krenge ek plate mai ❤️.
        </p>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg mt-4">
          Tune kha aaj ki aise aise 4 saal baad hum shadi shudi aur apun lga tha ki nhi 6 saal 🤣 ye vo bhyijaan mera bass chle tujhe aaj hi bolde mai ki aaja bc shadi kre sath rhe aaj se hi umro mai kya pda h ho jayga sb shi.
        </p>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg mt-4">
          Mera bda dill h yr, subha tere se pehle uth kr tujhe sote dekhna fir uthana thnde hath lga kr fir chai kon bnayga uska kalesh ye vo fir nashta fir badmosi fir tu nahane ko kehne pe lgi hui apun ko apun maan nhi rha 😭.
        </p>
        <p className="text-gray-800 leading-relaxed text-base md:text-lg mt-4">
          So juuu know apun aise kutto jaise likh skta h but fayda nhi uska islye itna hi bss h 😎 aur aur koi bhi baat abtk buri lgi ho jiski vajeh se tune vo chiz k baare baat krni bnd krdi to apun ksm se chahta h ki please MAAF kr aur normla hoja. Mai abse aur dehyan rkhega hr chiz ka aur tera. ❣️
        </p>
        <div className="mt-6">
          <h3 className="text-xl md:text-5xl">🥰 hehe ek last bs aur 👉
            <span onClick={() => navigate("/seventhPage")} className=" text-base bg-rose-500 rounded-full px-5 py-1 font-semibold shadow-lg shadow-rose-600 text-white cursor-pointer ml-3">Next</span>
             </h3>
        </div>
      </div>
    </div>
  );
};

export default Page6;
