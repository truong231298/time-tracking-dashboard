import imageAvatar from "/images/image-jeremy.png"
import { useState } from "react"
import iconElli from "/images/icon-ellipsis.svg"
import datas from "./assets/data.json"

export default function App() {
  const [selectTime, setSelectTime] = useState('daily');

  const handleChageTime = (time) => {
    setSelectTime(time)
  }

  return (
    <main className="min-h-screen flex justify-center items-center bg-Verydarkblue">
      <section className="flex sm:flex-row w-full sm:w-auto p-4 flex-col gap-2">
        <div className="sm:w-48 sm:h-62 flex flex-col bg-Darkblue rounded-lg">
          <div className="bg-Blue rounded-lg p-4 flex flex-row sm:flex-col gap-2">
            <img src={imageAvatar} alt="" className="w-16 rounded-full p-1 bg-white mb-4" />

            <span>
              <p className="text-gray-700">Report for</p>
              <span className="flex flex-row sm:flex-col gap-2">
                <h1 className="text-white  text-xl">Jeremy</h1>
                <h1 className="text-white text-xl">Robson</h1>
              </span>

            </span>

          </div>
          <div className="flex justify-between sm:flex-col items-start p-4 text-gray-500 gap-2">
            <button
              onClick={() =>handleChageTime('daily')}
              className={`hover:text-white active:text-white ${selectTime === 'daily' ? "text-white" : ""}`}>Daily</button>
            <button onClick={() => handleChageTime('weekly')}
              className={`hover:text-white active:text-white ${selectTime === 'weekly' ? "text-white" : ""}`}>Weekly</button>
            <button onClick={() => handleChageTime('monthly')}
              className={`hover:text-white active:text-white ${selectTime === 'monthly' ? "text-white" : ""}`}>Monthly</button>
          </div>
        </div>

        <div className="grid grid-col-1 sm:grid-rows-2 sm:grid-flow-col gap-4">
          {datas.map((data) => (
            <div key={data.title} className={`rounded-lg sm:w-44`} style={{ backgroundColor: data.background }}>
              <img src={data.images} alt="" className="w-12 float-end" />
              <div className="sm:absolute sm:w-44 p-4 mt-12 bg-Darkblue rounded-lg text-white">
                <span className="flex justify-between items-center mb-2">
                  <p>{data.title}</p>
                  <img src={iconElli} alt="" className="w-6" />
                </span>

                <span className="flex justify-between sm:flex-col">
                  <h1 className="sm:text-4xl text-2xl font-medium">{data.timeframes[selectTime].current}hrs</h1>
                  <p className="text-gray-500">{`Last Week - ${data.timeframes[selectTime].previous}hrs`}</p>
                </span>



              </div>
            </div>
          ))}


        </div>
      </section>
    </main>
  )
}