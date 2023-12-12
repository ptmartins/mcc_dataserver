const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use(middlewares);

const data1 = require('./db/info.json');
const data2 = require('./db/license.json');
const data3 = require('./db/general.json');
const data4 = require('./db/certificates.json');
const data5 = require('./db/diagnostics.json');
const data6 = require('./db/updates.json');
const data7 = require('./db/resourceGroups.json');
const data8 = require('./db/applications.json');
const data9 = require('./db/schema.json');
const data10 = require('./db/databases.json');
const data11 = require('./db/localCertificates.json');
const data12 = require('./db/fields.json');
const data13 = require('./db/roles.json');
const data14 = require('./db/renditionProfile.json');
const data15 = require('./db/mappingFiles.json');
const data16 = require('./db/defaultRights.json');
const data17 = require('./db/tabs.json');
const data18 = require('./db/tools.json');

const combinedData = {
  info: data1.info,
  license: data2.licences,
  plugins: data2.plugins,
  general: data3,
  certificates: data4.certificates,
  diagnostics: data5.dumpfiles,
  updates: data6,
  resourceGroups: data7,
  applications: data8.applications,
  schema: data9,
  databases: data10.databases,
  localCertificates: data11,
  fields: data12,
  roles: data13,
  renditions: data14,
  mappings: data15,
  defaultRights: data16,
  tabs: data17,
  tools: data18
};

const router = jsonServer.router(combinedData);

// server.use('/api', router);
server.use('/api', router);


const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

module.exports = server;