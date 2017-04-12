import React from 'react';

function Stats(props) {
    return (
      <table className="stats">
        <tbody>
          <tr>
              <th>Всего новостей:</th>
              <td>3</td>
          </tr>
          <tr>
              <th>Прочитано: </th>
              <td>1</td>
          </tr>
          <tr>
             <th>Осталось:</th>
             <td>2</td>
    </tr>
  </tbody>
</table>
    );
}

export default Stats;
