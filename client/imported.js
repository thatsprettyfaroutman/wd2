/* eslint-disable */ 
    import {assignImportedComponents} from 'react-imported-component';
    const applicationImports = {
      "0": () => import('./views/Careers/content.js'),
"1": () => import('./views/Case/contents/kisapahkina'),
    };
    assignImportedComponents(applicationImports);
    export default applicationImports;