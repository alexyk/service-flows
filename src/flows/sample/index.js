import testFlows from 'test-flows';
const { AbstractFlow, ConsoleAction, FetchRequest, DelayAction, ExecuteFunction } = testFlows;
const tf = require('test-flows');

let sample = function (...args) {
  let flow = AbstractFlow('Sample Flow - with exec, redux and navigation flow items');

  if (args.length == 0) {
    console.error("One parameter needed - URL")
  } else {
      const url = args[0];
    
      // chain of commands
      // prettier-ignore
      flow
        .createChain = () => [
          new ConsoleAction         ('clear console'          , flow, [], 'clear'),
          new ConsoleAction         ('start time calculation' , flow, [], 'time-start', 'guest-flow-duration'),
    
          new FetchRequest          ('fetch request'          , flow, ['data','error'], url, {}),
    
          new ConsoleAction         ('end time calculation'   , flow, [], 'time-end', 'guest-flow-duration'),
      ];
  }

  return flow;
}


export default sample;