# Cause or Correlation

## Recognising dependence

> section: chapter-1

::: .theorem.f-blue
In this module, you will attempt to answer the question, cause or correlation? Or in other words,
does changing one variable have an impact upon a different variable? This is important in many
instances in real life as it can alter the decisions you make, from a medical diagnosis to an
environmental impact or a financial trend.

You will learn to recognise whether two variables are dependent on or independent of each other and
be able to distinguish the similarities and differences between dependence, correlation and cause.

You will learn about the connections between dependent behaviour and the cause for such behaviour,
and how they are often misused. The final project will be to investigate whether or not there is
correlation for a variety of real examples and whether any causation can be inferred.
:::

---

### What is dependence?

In order to recognise dependence in mathematical visualisations and within data, you first need to
understand what it is and how it differs from independence.

__Dependence__ means that one variable is affected by another, as opposed to independence, which
means the variable or event is as likely to happen regardless of other events that could or do occur.

Many variable quantities in life are related to changes in other quantities. For example, the size
of your shoes is related to your height.

Decide if these variables are [dependent](gloss:dependent-events) (one affects the other) or
[independent](gloss:independent-events) (one does not affect the other):

    x-buckets
      .inputs
        .input(bucket="1") The temperature of water from a hot tab, and the size of the tab.
        .input(bucket="0") The size of a computer screen, and the number of pixels it has.
        .input(bucket="0") The cost to rent a house (in a given area), and the number of bedrooms it has.
        .input(bucket="1") The weight of a baby at birth, and the day of the week on which it is born.
        .input(bucket="0") The time since the launch of a mobile phone, and the amount of storage it has.
        .input(bucket="1") The number of puppies a dog has, and the length of the tail of the dog.
      .buckets
        .bucket
          .title Dependent
        .bucket
          .title Independent

---

### Do scatter plots help us recognise dependencies?

Now that you understand the difference between a dependent and an independent event, you are ready
to see if you can recognise them in data.

Trends in scatter plots can help us to identify dependent events. Take a look at the examples below
to see how they might be recognised.

__Dependence__ is a term that is used when one variable affects the behaviour of another. Below are
six plots that may or may not have dependent x and y variables. Drag each slider slowly to the right
and try to spot the trend. For further help, hover on the info icon in the top-right-hand corner.

    iframe.wolfram(src="https://www.wolframcloud.com/obj/40e96625-73b4-4864-9539-c5ab7ac15a02" width=600 height=240 frameborder=0)

Let's see if you have understood how to recognise dependence within scatter plots.

    iframe.wolfram(src="https://www.wolframcloud.com/obj/70b64565-c758-4d5c-ab4c-9b76e449b535" width=360 height=235 frameborder=0)

You should now be able to identify a scatter plot that depicts a simple dependency and be able to
see whether a trend is going up or down.

---

### Do scatter plots help us recognise the amount of dependency?

There are varying levels of dependence. For example, the amount of milk you can buy completely
depends on the amount of money you have, but how late a bus arrives is only slightly dependent on
a traffic light being red: it could also be affected by how many people took a long time to find
their change, the amount of traffic on the road or the mood or driving habits of the bus driver. So
would the amount of dependence of these two events look different on a scatter plot?

The amount of dependence can be quantified on a scatter plot. It is time for you to see if you can
spot these greater or lesser dependencies. You already know how to identify scatter plots depicting
strong upward or downward trends, but can you work out which ones have just some dependence or none
at all?

Now we will look at the same six plots and try to decide which of them show more dependence than
others. Drag them into a rank order, from the most dependent upward (positive) at the top to the
most dependent downward (negative) at the bottom.


----------------------------------------------------------------------------------------------------


## Measure linear dependency

> section: chapter-2
> id: xie
 
 斜二测画正方体

    figure
      x-geopad(width=600 height=600 x-axis="-2,2,1" y-axis="-2,2,1"  padding=5): svg
        circle.move.green(name="o" cx=0 cy=0 label="O")
        circle.blue(x="bimetric(1,1,-1)" name="a" label="A")
        circle.blue(x="bimetric(-1,1,-1)" name="b" label="B")
        circle.blue(x="bimetric(-1,-1,-1)" name="c" label="C")
        circle.blue(x="bimetric(1,-1,-1)" name="d" label="D")
        circle.blue(x="bimetric(1,1,1)" name="e" label="E")
        circle.blue(x="bimetric(-1,1,1)" name="f" label="F")
        circle.blue(x="bimetric(-1,-1,1)" name="g" label="G")
        circle.blue(x="bimetric(1,-1,1)" name="h" label="H")
        path.blue(x="polygon(a,b,f,g,h,d)")
        path.blue(x="segment(a,e)" )
        path.blue(x="segment(h,e)" )
        path.blue(x="segment(f,e)" )
        path.blue(x="segment(c,d)" style = "stroke-dasharray: 8px 10px")
        path.blue(x="segment(b,c)" style = "stroke-dasharray: 8px 10px")
        path.blue(x="segment(c,g)" style = "stroke-dasharray: 8px 10px")

---
> id: geo-2020
 
 2020-19

    figure
      x-geopad(width=300 height=600 x-axis="-1,2,1" y-axis="-1,5,1"  padding=5): svg
        circle.blue(x="bimetric(2,1,3)" name="a" label="A")
        circle.blue(x="bimetric(0,1,3)" name="b" label="B")
        circle.blue(x="bimetric(0,0,3)" name="c" label="C")
        circle.blue(x="bimetric(2,0,3)" name="d" label="D")
        circle.blue(x="bimetric(2,0,2)" name="e" label="E")
        circle.blue(x="bimetric(0,1,1)" name="f" label="F")
        circle.blue(x="bimetric(2,1,0)" name="a1" label="A1")
        circle.blue(x="bimetric(0,1,0)" name="b1" label="B1")
        circle.blue(x="bimetric(0,0,0)" name="c1" label="C1")
        circle.blue(x="bimetric(2,0,0)" name="d1" label="D1")
        path.blue(x="polygon(a1,b1,f,b,c,d,e,d1)")
        path.blue(x="polygon(a1,f,a,e)")
        path.blue(x="segment(a,a1)" )
        path.blue(x="segment(a,d)" )
        path.blue(x="segment(a,b)" )
        path.blue(x="segment(c,c1)" style = "stroke-dasharray: 8px 10px")
        path.blue(x="segment(c1,d1)" style = "stroke-dasharray: 8px 10px")
        path.blue(x="segment(c1,b1)" style = "stroke-dasharray: 8px 10px")
        path.blue(x="segment(e,f)" style = "stroke-dasharray: 8px 10px")
---
> id: roots

Here is a geopad with axes and coordinate system

    figure
      x-geopad(width=600 height=400 x-axis="-6,6,1" y-axis="-4,4,1" complex padding=5): svg
        circle.move.green(name="p" cx=2 cy=2)
        path.green(x="segment(point(0,0),p)")
        circle.red(x="complexRoot(p,3,0)" name="r0")
        circle.red(x="complexRoot(p,3,1)" name="r1")
        circle.red(x="complexRoot(p,3,2)" name="r2")
        path.red(x="polygon(r0,r1,r2)")



----------------------------------------------------------------------------------------------------


## Shortcomings of the correlation coefficient

> section: chapter-3

TODO


----------------------------------------------------------------------------------------------------


## Relation between correlation and causation

> section: chapter-4

TODO


----------------------------------------------------------------------------------------------------


## Project

> section: chapter-5

TODO
