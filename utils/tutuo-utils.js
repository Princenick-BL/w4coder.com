import {SECTION_TYPE} from '../constants'

export const getSection = (s) =>{
    switch(s?.type){
        case SECTION_TYPE.CODE_BLOCK:
            return(
            <div className="Code">
                <pre>
                    <code className={`language-javascript`} dangerouslySetInnerHTML={{__html:s?.content}}>
                       
                    </code>
                </pre>
            </div>
            )
        default :
            return <div dangerouslySetInnerHTML={{__html: s?.content}}></div> 
    }
}