G.Models.Gist = Backbone.Model.extend({
  urlRoot: "/gists",

  schema: {
    title: 'Text'
  }
});