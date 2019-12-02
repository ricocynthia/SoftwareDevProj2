/**
 * 
 * Small service for calling GraphQL API server -- this is going to link the backend with the fronend. 
 */
class ApiService {

    /**
     * this is where we're going to be definding the  base url and field schemas. 
     * @returns {ApiService}
     */
    constructor() {
        this.apiUrl = 'https://csc443-project-main-api.herokuapp.com/'; 
        this.toolsField = `{id, created_by, name, type, date_added, quantity, quantity_history}`;
    }



    /**
     * Generic function to fetch data from server
     * @param {string} query
     * @returns {unresolved}
     */
    async getGraphQlData(resource, params, fields) {
        const query = `{${resource} ${this.paramsToString(params)} ${fields}}`
        const res = await fetch(this.apiUrl, {
            method: 'POST',
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }),
            body: JSON.stringify({query}),
        });
        if (res.ok) {
            const body = await res.json();
            return body.data;
        } else {
            throw new Error(res.status);
        }
    }

  
    /**
     * 
     * @param {object} params
     * @returns {array} a list of tools or an empty list
     */
    async getTools(params = {}) {
        const data = await this.getGraphQlData('tools', params, this.toolsField);
        //return todos list
        return data.todos;
    }

    /**
     * 
     * @param {object} params
     * @returns {String} params converted to string for usage in graphQL
     */
    paramsToString(params) {
        let paramString = '';
        if (params.constructor === Object && Object.keys(params).length) {
            let tmp = [];
            for (let key in params) {
                let paramStr = params[key];
                if(paramStr !== '') {
                    if (typeof params[key] === 'string') {
                        paramStr = `"${paramStr}"`;
                    }
                    tmp.push(`${key}:${paramStr}`);
                }
            }
            if (tmp.length) {
                paramString = `(${tmp.join()})`;
            }
        }
        return paramString;
    }

}

export default new ApiService();