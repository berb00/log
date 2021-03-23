# java package

## list

```text
applet
awt
beans
io
lang
math
net
nio
rmi
security
sql
text
time
util


```

## 继承关系

```text
┌───────────────┐
│   Iterable    │
└───────────────┘
        ▲                ┌───────────────────┐
        │                │      Object       │
┌───────────────┐        └───────────────────┘
│  Collection   │                  ▲
└───────────────┘                  │
        ▲     ▲          ┌───────────────────┐
        │     └──────────│AbstractCollection │
┌───────────────┐        └───────────────────┘
│     List      │                  ▲
└───────────────┘                  │
              ▲          ┌───────────────────┐
              └──────────│   AbstractList    │
                         └───────────────────┘
                                ▲     ▲
                                │     │
                                │     │
                     ┌────────────┐ ┌────────────┐
                     │ ArrayList  │ │ LinkedList │
                     └────────────┘ └────────────┘


Interface:


Iterable<T>
    Collection <E>
        BeanContext
        BeanContextServices
        BlockingDeque <E>
        BlockingQueue <E>
        Deque <E>
        List <E>
                AbstractList
                AbstractSequentialList
                ArrayList
                AttributeList
                CopyOnWriteArrayList
                LinkedList
                RoleList
                RoleUnresolvedList
                Stack
                Vector
        Queue <E>
            BlockingDeque <E>
            BlockingQueue <E>
            Deque <E>
            TransferQueue <E>

            AbstractQueue
            ArrayBlockingQueue
            ArrayDeque
            ConcurrentLinkedDeque
            ConcurrentLinkedQueue
            DelayQueue
            LinkedBlockingDeque
            LinkedBlockingQueue
            LinkedList
            LinkedTransferQueue
            PriorityBlockingQueue
            PriorityQueue
            SynchronousQueue
        Set <E>
            NavigableSet <E>
            SortedSet <E>

            AbstractSet
            ConcurrentHashMap.KeySetView
            ConcurrentSkipListSet
            CopyOnWriteArraySet
            EnumSet
            HashSet
            JobStateReasons
            LinkedHashSet
            TreeSet
        SortedSet <E>
        TransferQueue <E>
        NavigableSet <E>

    DirectoryStream <T>
    Path
    SecureDirectoryStream <T>





Interface Map<K,V>
    Interface Bindings
        SimpleBindings
    Interface ConcurrentMap <K，V>
        Interface ConcurrentNavigableMap <K，V>
            Class ConcurrentSkipListMap
        Class ConcurrentHashMap
        Class ConcurrentSkipListMap
    Interface MessageContext
        Interface LogicalMessageContext
    Interface SortedMap <K，V>
    Interface NavigableMap <K，V>
        Interface ConcurrentNavigableMap <K，V>
                Class ConcurrentSkipListMap
        Class ConcurrentSkipListMap
        Class TreeMap
    Interface SOAPMessageContext


ConcurrentMap <K，V>
Map <K，V>
NavigableMap <K，V>
SortedMap <K，V>

ConcurrentSkipListMap




```
