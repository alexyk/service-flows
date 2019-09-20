import testFlows from 'test-flows';
const { AbstractFlow, ConsoleAction, FetchRequest, DelayAction, ExecuteFunction } = testFlows;
const tf = require('test-flows');

let hotelSearch = function () {
  debugger
  let flow = AbstractFlow('Sample Flow - with exec, redux and navigation flow items');
  console.log('get params', config)
  let getParams = config.getParams(flow);

  // chain of commands
  // prettier-ignore
  flow
    .createChain = () => [
      new ConsoleAction         ('clear console'          , flow, [], 'clear'),
      new ConsoleAction         ('start time calculation' , flow, [], 'time-start', 'guest-flow-duration'),

      new FetchRequest          ('fetch request'          , flow, ['data','error'], data.url, {}),
      new DelayAction           ('delay'                  , flow, [], 0.7),
      new ExecuteFunction       ('set redux data (with an action set with setConfig)'   , flow, [], config.reduxAction, getParams('redux-exec-payload'), null),


      new ConsoleAction         ('end time calculation'   , flow, [], 'time-end', 'guest-flow-duration'),
  ];

  return flow;
}


export default hotelSearch;