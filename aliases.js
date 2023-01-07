const aliases = (prefix = `src`) => ({
  components: `${prefix}/components`,
  store: `${prefix}/store`,
  configs: `${prefix}/configs`,
  hooks: `${prefix}/hooks`,
  "routes/projects": `${prefix}/routes/projects`,
});

module.exports = aliases;
