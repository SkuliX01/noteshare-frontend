
import * as React from "react"

export function Subjectlist({value, onChange}) {

  return (
    <div>
      <select name="" id="" value={value} onChange={onChange} className="w-[290px] mt-[10px] border-[1px] h-[35px] rounded-[5px]">
        <option value="polski">Język Polski</option>
        <option value="anigelski">Język Angielski</option>
        <option value="niemiecki">Język Niemiecki</option>
        <option value="hiszpański">Język Hiszpański</option>
        <option value="matematyka">Matematyka</option>
        <option value="fizyka">Fizyka</option>
        <option value="chemia">Chemia</option>
      </select>
    </div>
  )
}
