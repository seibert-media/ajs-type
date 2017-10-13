# ajs-type

Adds TypeScript definitions for AJS used in Atlassian products.

## Installing

Install the npm package  

```
$ npm install --save-dev ajs-type
```

and fix your `tsconfig.json` to make the new typings known

```
[...]
"types": [ "ajs-type" ],
[...]
```

*Note: This will disable automatic @types detection by your compiler. Add it back in if you need it with the `typeRoots` config option.* 

End with an example of getting some data out of the system or using it for a little demo

## Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change. 

### Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Check out the tag with version number of the appropriate AJS version if you are making a change to typings. If you want to improve tooling, check out the newest version instead. 
3. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
4. Mergers, make sure to untag any old version that may exist and re-tag the merge commit.  

## Versioning

Since we try to keep parity with AJS, we use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/seibert-media/ajs-type/tags). 

If you need to support a specific version of AJS, you can configure your `package.json` like this: 
````
"ajs-type": ">=5.7.2-0 <5.7.2",
````

We work with npm prerelease notation to be able to change typings while still keeping the package version equivalent to the version of AJS being typed. That way we circumvent npm's restriction where a version can only be published once without losing the correlation to `AJS.version`.

### Compatibility Table
|AJS|Confluence|
|---|---|
|5.9.24|5.10.8|
|5.10.1|6.1.4|
|6.0.6|6.4.2|
