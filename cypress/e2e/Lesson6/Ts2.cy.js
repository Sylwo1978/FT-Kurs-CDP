const url = 'http://jsonplaceholder.typicode.com/posts'
const url_PUT = 'http://jsonplaceholder.typicode.com/posts/1'
const url_DELETE = 'https://jsonplaceholder.typicode.com/posts/1'

describe('my firs scenario', () => {
    it ('should test jsonplaceholder api', function () {

        cy.request(url).then((response) =>{
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)

        })

        cy.request(
            {
            method: 'POST',
            url: url,
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
        }),
        headers: {'Content-type': 'application/json'}
        }
        ).then((response) => {
            const body = JSON.stringify(response.body)
            cy.log(body)
        })
        //put
        cy.request(
            {
            method: 'PUT',
            url: url_PUT,
            body: JSON.stringify({
                title: 'foot',
                body: 'bar',
                userId: 1,
   
        }),
        headers: {'Content-type': 'application/json'}

    }).then((response) => {
        const body = JSON.stringify(response.body)
        cy.log(body)
       expect(response.body, 'response body').to.include({title: 'foot',body: 'bar', userId: 1 })
    })            
        //delete
        cy.request(
            {
            method: 'DELETE',
            url: url_DELETE,
      
            }).then((response) => {
                const body = JSON.stringify(response.body)
                cy.log(body)
                expect(body).to.eql('{}')
            })
            })

            })
 
