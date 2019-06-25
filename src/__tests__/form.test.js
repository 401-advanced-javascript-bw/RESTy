import React from 'react';
import Form from '../components/Form.js';
import renderer from 'react-test-renderer';
import superagent from 'superagent';

describe('<Form/>', () => {
  test('basic rendering', () => {
    const mountedForm = shallow(<Form />);
    expect(mountedForm.find('input')).toBeTruthy();
  });
  test('testing get state changes', () => {
    const mountedForm = mount(<Form />);
    const selectGet = mountedForm.find('input.get');
    selectGet.simulate('change');
    expect(mountedForm.state('selectedMethod')).toEqual('get');
  });
  it('should be able to get', () => {
    superagent
      .get('https://lab-19-api-server-bw.herokuapp.com/api/v1/movies')
      .then(result => {
        expect(result[0].title).toEqual('shrek');
      });
  });

  it('should be able to post', () => {
    superagent
      .post('https://lab-19-api-server-bw.herokuapp.com/api/v1/movies')
      .set('Content-Type', 'application/json')
      .send('{title:"Cinderella", genre:"disney", rating:10}')
      .then(result => {
        console.log(result);
        superagent
          .get('https://lab-19-api-server-bw.herokuapp.com/api/v1/movies')
          .then(result => {
            expect(result[-1].title).toEqual('cinderella');
          });
      })
      .catch(err => console.error(err));
  });

  it('should be able to delete', () => {
    let length = 0;
    superagent
      .get('https://lab-19-api-server-bw.herokuapp.com/api/v1/movies')
      .then(result => {
        length = Object.keys(result).length;
        superagent
          .delete('https://lab-19-api-server-bw.herokuapp.com/api/v1/movies')
          .set('Content-Type', 'application/json')
          .then(result => {
            console.log(result);
            let regex = /([^/]+$)/g;
            URL = URL.replace(regex, '');
            superagent.get(URL).then(result => {
              expect(Object.keys(result).length).toEqual(length - 1);
            });
          })
          .catch(err => console.error(err));
      });
  });
});
