import ClassicTemplate from './classic';
import HorizontalTemplate from './horizontal';
import SocialTemplate from './social';
import StripTemplate from "./strip";
export default function VariousTemplates({selectedTemplate,variableInput}){
    if(selectedTemplate===1){
        return(
            <ClassicTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 2){
        return(
            <HorizontalTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 3){
        return(
            <SocialTemplate variableInput={variableInput}/>
        )
    }
    else if(selectedTemplate === 4){
        return(
            <StripTemplate variableInput={variableInput} />
        )
    }
}