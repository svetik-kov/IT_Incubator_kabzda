import React from "react";


type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {

    return (
        <div><Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            {/*<Star selected={props.value > 5}/>*/}

        </div>
    )

    /* if (props.value === 1) {
         return (
             <div><Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }
     if (props.value === 2) {
         return (
             <div><Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     }
     if (props.value === 3) {
         return (
             <div><Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>
         )
     } if (props.value === 4) {
         return (
             <div><Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={false}/>
             </div>
         )
     }
     if (props.value === 5) {
         return (
             <div><Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
                 <Star selected={true}/>
             </div>
         )
     } else {
         return (
             <div><Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
                 <Star selected={false}/>
             </div>)
     }
 */


}

type StarPropsType = {
    selected: boolean
}

function Star(props: any) {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }

}