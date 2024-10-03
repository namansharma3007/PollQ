export default function CreateNewPoll() {
  return (
    <section className="flex flex-1 h-[43rem] m-4 items-center justify-center">
      <div className="flex p-4 bg-gray-p rounded-xl w-max">
        <form action="" className="flex flex-col gap-4 w-[35rem]">

            <div className="flex gap-4 input-field-set">
                <label htmlFor="poll-name">Poll Name</label>
                <input type="text" name="poll-name" id="poll-name" className="input-field" placeholder="Poll Name"/>
            </div>

            <div className="input-field-set">
                <label htmlFor="poll-setter">Poll setter name</label>
                <input type="text" name="poll-setter" id="poll-name" className="input-field" placeholder="Poll setter name"/>
            </div>

            <div className="input-field-set">
                <label htmlFor="poll-name">Poll Name</label>
                <input type="text" name="poll-name" id="poll-name" className="input-field" placeholder="Poll Name"/>
            </div>

            <div className="flex justify-between ">
                <label htmlFor="poll-description" className="text-white">Poll Name</label>
                <textarea name="poll-description" id="poll-description" className="input-field" placeholder="Poll Description" rows={8}></textarea>
            </div>
          
        </form>
      </div>
    </section>
  );
}
