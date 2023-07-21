var documenterSearchIndex = {"docs":
[{"location":"comparisons/comparisons/#Biopython-(Python3)","page":"-","title":"Biopython (Python3)","text":"","category":"section"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Biopython represents an ecosystem of related biology tools written in the Python3 programming language\nUnlike in BioJulia, Biopython tools are installed together as modules into a single biopython package \nReleased over two decades ago with major releases covering the Python2/3 transition\nCapabilities cover a number of molecular biology applications including sequence alignment, population genetics, and machine learning","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Application BioJulia Package Biopython object/module\nSequence annotation BioSymbols, BioSequences Seq, SeqRecord\nInput/Output FASTX, XAM, BigWig,... Bio.SeqIO, Bio.AlignIO\nSequence alignment BioAlignments Bio.Align\nPopulation genetics PopGen Bio.PopGen","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"A few package/ecosystem equivalents between Julia and Python3:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Application Julia Python3\nData manipulation/analysis DataFrames, Query pandas, Blaze\nPlotting/visualization Plots, Gadfly, Makie matplotlib, seaborn, bokeh, plotnine, VisPy\nStatistical analysis Statistics, HypothesisTests, GLM SciPy, statsmodels\nMachine learning Flux, SciML, Zygote PyTorch, TensorFlow, scikit-learn, JAX\nNumerical mathematics LinearAlgebra, Symbolics NumPy, SciPy, SymPy\nNotebook/report generator IJulia, Pluto, Weave IPython, Jupyter Book\nWeb applications Genie, Franklin Django, Flask, Pelican, Dash","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"A few notable differences between Julia and Python3:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Julia Python3\nHigh-level, general-purpose compiled language High-level, general purpose interpreted language\nExpression-based (statements evaluate to a value) Statement-based (assignment as a statement)\nDynamically typed with multiple dispatch and optional type annotations Dynamically typed with optional type annotations\nBuilt-in parallelism via threads, coroutines (Tasks) Limited (GIL) parallelism via threads, async/await\nExtensive metaprogramming (Lisp-like macros, homoiconicity,...) Less extensive metaprogramming (decorators, metaclasses,...)\nIncluded default package manager No default package manager (poetry, conda, other alternatives available)\nSingle implementation available (JuliaLang) Multiple implementations available (PyPy, Numba,...)\nArrays are column-major (columns are contiguous in memory) (Numpy) arrays are row-major by default (rows are contiguous in memory)","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"To transition from Python3 to Julia:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"See Noteworthy differences from Python in the Julia manual for a more in-depth comparison\nUse PythonCall.jl/CondaPkg.jl to seamlessly integrate Python3 code into your Julia project","category":"page"},{"location":"comparisons/comparisons/#BioConductor-(R)","page":"-","title":"BioConductor (R)","text":"","category":"section"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"BioConductor represents an ecosystem of related genomics tools primarily written in the R programming language\nTools written in other languages, such as C and Python, are also included in BioConductor with R wrappers available \nReleased in 2001 with 3 major releases and hosts over 2000 packages\nCapabilities cover a number of molecular biology applications including sequence alignment, population genetics, and machine learning","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Application BioJulia Package BioConductor package\nCore primitives/interfaces BioGenerics, BioSymbols BiocGenerics, Biobase\nSequence annotation BioSymbols, BioSequences Seq, SeqRecord\nInput/Output FASTX, XAM., BigWig,... BiocIO, Biostrings, ShortRead,...\nSequence alignment BioAlignments Bio.Align\nPopulation genetics PopGen Bio.PopGen","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"A few package/ecosystem equivalents between Julia and R:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Application Julia R\nData manipulation/analysis DataFrames, Query tibble, dplyr\nPlotting/visualization Gadfly, VegaLite, Makie ggplot2, vegalite, plotly\nStatistical analysis Statistics, HypothesisTests, GLM stats\nMachine learning Flux, SciML, Zygote mlr3, caret, tidymodels, Deriv\nNumerical mathematics LinearAlgebra, IterativeSolvers Matrix, pracma, deSolve\nWeb applications Genie, Franklin shiny","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"A few notable differences between Julia and R:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"Julia R\nHigh-level, general-purpose compiled language High-level, interpreted language for statistical computing\nDynamically typed with multiple dispatch and optional type annotations Dynamically typed without type annotations support\nBuilt-in parallelism via threads, coroutines (Tasks) Parallelism via external libraries (BLAS, parallel,...)\nExtensive metaprogramming (Lisp-like macros, generated functions,...) Less extensive metaprogramming (function factories, expression manipulation,...)\nSingle implementation available (JuliaLang) Multiple implementations available (pqR, Renjin,...)","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"To transition from R to Julia:","category":"page"},{"location":"comparisons/comparisons/","page":"-","title":"-","text":"See Noteworthy differences from R in the Julia manual for a more in-depth comparison\nUse RCall.jl to seamlessly integrate R code into your Julia project","category":"page"},{"location":"comparisons/comparisons/#BioPerl-(Perl)","page":"-","title":"BioPerl (Perl)","text":"","category":"section"},{"location":"#BioJulia:-Fast,-open,-easy,-software-for-biology","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"","category":"section"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"Note: This landing site is under extensive development and will receive frequent updates.  It is not in a ready state, and is published under GitHub Pages only for testing purposes. ","category":"page"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"BioJulia is a passionate, community-led organization providing biology-related packages written  in the Julia programming language. The organization offers a comprehensive,  fully open-source ecosystem of both libraries that serve as essential building blocks for other packages  as well as interactive tools for everyday tasks and workflows. ","category":"page"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"Biologists are fully empowered by Julia to easily tackle domain-specific challenges, taking advantage of features including:","category":"page"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"Fully reproducible environments thanks to Julia's built-in package manager\nCompetitive performance that rivals that of lower-level, more complex languages such as C and Fortran\nUnicode-based math symbol support, transparent BLAS integration, and additional features for performing complex numerical operations   \nA batteries-included read-eval-print loop (REPL) for interactive data exploration and prototyping\nSeamless interoperability (JLLs, Cmd,...) with other languages via multiple foreign function interfaces","category":"page"},{"location":"#Where-to-Start?","page":"BioJulia: Fast, open, easy, software for biology","title":"Where to Start?","text":"","category":"section"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"Take a look at all BioJulia code via the official GitHub page.\nBegin contributing ideas and features following the core guidelines.\nDeep dive into the ecosystem over at the Overview.\nStart learning right away using the Getting Started tutorials.\nSee some awesome examples in the BioJulia Showcase.\nCompare performance with the BioJulia Open Benchmarks.\nCome chat with us over in the Slack #biology workspace and on forums.","category":"page"},{"location":"","page":"BioJulia: Fast, open, easy, software for biology","title":"BioJulia: Fast, open, easy, software for biology","text":"Use the top navigation bar to search for provided packages within one's field of interest.","category":"page"}]
}
