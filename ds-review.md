DSs in order from simplest to most complex

-set (key, val)
    +a map without values
    +iterable
    +useful if you only need unique values (no duplicate vals in a set)
    +amortized O(1) runtime for get/set/delete operations 
    +useful to group unique things and check if a certain val is in the set
    +you're always pushing to the end
    +keeps keys in order of insertion, no idxs though
    +keys can be any type
    +sneaky optimization trick
        ~you lose the idx but can always convert a set to an array
        ~and looking up a value is O(n)
        ~sets have to have unique values, 
            so if you wanna make sure an arr only has unique values,
            you can convert an array to a set and then back again
            to remove redundant elements


-hashmaps
    +set/get/has/delete O(1), keys/values/entries O(n)
    +you have to know what you're looking for
    +most performant data structure