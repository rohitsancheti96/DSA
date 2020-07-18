#include <iostream>
#include <bits/stdc++.h>
#include <unordered_map>

using namespace std;

// https://www.geeksforgeeks.org/unordered_map-in-cpp-stl/

int main()
{
    unordered_map<string, int> umap;

    // inserting values by using [] operator
    umap["GeeksforGeeks"] = 10;
    umap["Practice"] = 20;
    umap["Contribute"] = 30;

    // Traversing an unordered map
    for (auto x : umap)
        cout << x.first << " " << x.second << endl;

    string str = "geeks for geeks geeks quiz "
                 "practice qa for";
    printFrequencies(str);

    return 0;
}

// Prints frequencies of individual words in str
void printFrequencies(const string &str)
{
    // declaring map of <string, int> type, each word
    // is mapped to its frequency
    unordered_map<string, int> wordFreq;

    // breaking input into word using string stream
    stringstream ss(str); // Used for breaking words
    string word;          // To store individual words
    while (ss >> word)
        wordFreq[word]++;

    // now iterating over word, freq pair and printing
    // them in <, > format
    unordered_map<string, int>::iterator p;
    for (p = wordFreq.begin(); p != wordFreq.end(); p++)
        cout << "(" << p->first << ", " << p->second << ")\n";
}